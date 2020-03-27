from django.urls import path, include

from rest_framework import routers
from .views import LeadsViewSet, CommentViewSet, DashViewSet

router = routers.DefaultRouter()
router.register('Leads', LeadsViewSet)
router.register('Comments', CommentViewSet)
router.register('partial', DashViewSet)

urlpatterns = [
    path('leads/', include(router.urls))
]
