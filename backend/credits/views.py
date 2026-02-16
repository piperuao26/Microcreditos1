from rest_framework import viewsets, permissions
from .models import Credit
from .serializers import CreditSerializer
from accounts.permissions import IsEmployee



class CreditViewSet(viewsets.ModelViewSet):
    serializer_class = CreditSerializer


    def get_queryset(self):
        user = self.request.user

        if not user.is_authenticated:
            return Credit.objects.none()

        # ADMIN ve todo
        if user.role == "ADMIN":
            return Credit.objects.all()

        # CLIENT ve solo los suyos
        if user.role == "CLIENT":
            return Credit.objects.filter(customer=user)

        # MERCHANT ve los que creó
        return Credit.objects.filter(created_by=user)

        

    def get_permissions(self):
        if self.action == "create":
            return [permissions.IsAuthenticated(), IsEmployee()]
        return [permissions.IsAuthenticated()]
