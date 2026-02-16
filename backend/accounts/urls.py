from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import me, AdminUserViewSet

router = DefaultRouter()
router.register("users", AdminUserViewSet, basename="users")

urlpatterns = [
    path("me/", me),
]

urlpatterns += router.urls
