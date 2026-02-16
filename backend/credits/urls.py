from rest_framework.routers import DefaultRouter
from .views import CreditViewSet

router = DefaultRouter()
router.register("", CreditViewSet, basename="credits")

urlpatterns = router.urls
