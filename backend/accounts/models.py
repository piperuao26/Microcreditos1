from django.contrib.auth.models import AbstractUser
from django.db import models
from .managers import UserManager


class User(AbstractUser):

    class Roles(models.TextChoices):
        CLIENT = "CLIENT", "Cliente"
        MERCHANT = "MERCHANT", "Comercio"
        ADMIN = "ADMIN", "Admin"

    username = None
    email = models.EmailField(unique=True)

    role = models.CharField(
        max_length=20,
        choices=Roles.choices,
        default=Roles.CLIENT
    )

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []

    objects = UserManager()   # 👈 ESTA ES LA CLAVE

    def __str__(self):
        return f"{self.email} ({self.role})"
