from rest_framework.permissions import BasePermission


class IsEmployee(BasePermission):
    def has_permission(self, request, view):
        return request.user.role in ["MERCHANT", "ADMIN"]


class IsCustomer(BasePermission):
    def has_permission(self, request, view):
        return request.user.role == "CLIENT"
