from django.urls import path, include
from rest_framework.routers import DefaultRouter
from api.views import DequeValidation, ProfileViewSet, UserViewSet, DequeViewSet, CardsView
from knox.views import LogoutAllView
from api.views import LoginView

router = DefaultRouter()
router.register(r'deques', DequeViewSet, basename="deques")
router.register(r'users', UserViewSet, basename="users")
router.register(r'profiles', ProfileViewSet, basename="profiles")

urlpatterns = [
    path('', include(router.urls)),
    path('login/', LoginView.as_view(), name='login'),
    path('logout/', LogoutAllView.as_view(), name='logout'),
    path('card/<int:did>', CardsView.as_view(), name='card_retrieve'),
    path('validate-deque', DequeValidation.as_view(), name='validate_deque'),
]
