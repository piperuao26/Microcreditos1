from django.db import models
from django.conf import settings


class Credit(models.Model):

    class Status(models.TextChoices):
        ACTIVE = "ACTIVE", "Activo"
        PAID = "PAID", "Pagado"
        CANCELLED = "CANCELLED", "Cancelado"

    # Cliente que recibe el crédito
    customer = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="customer_credits"
    )

    # Empleado que lo crea
    created_by = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="created_credits"
    )

    amount = models.DecimalField(max_digits=10, decimal_places=2)
    term_months = models.IntegerField()
    status = models.CharField(max_length=20, choices=Status.choices, default=Status.ACTIVE)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.customer.email} - {self.amount}"
