from django.urls import path, include
from rest_framework.routers import DefaultRouter
from api.views import UserViewSet, DequeViewSet
from knox.views import LogoutAllView
from api.views import LoginView

router = DefaultRouter()
router.register(r'deques', DequeViewSet, basename="deques")
router.register(r'users', UserViewSet, basename="users")

urlpatterns = [
    path('', include(router.urls)),
    path('login/', LoginView.as_view(), name='login'),
    path('logout/', LogoutAllView.as_view(), name='logout'),
]
