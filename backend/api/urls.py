from django.urls import path, include
from rest_framework.routers import DefaultRouter
from api.views import UserViewSet, DequeViewSet

router = DefaultRouter()
router.register(r'deques', DequeViewSet, basename="deques")
router.register(r'users', UserViewSet, basename="users")

urlpatterns = [
    path('', include(router.urls)),
]
