from django.contrib.auth.models import User
from rest_framework import viewsets
from rest_framework.generics import ListAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import BasicAuthentication
from knox.views import LoginView as KnoxLoginView
from api.models import Card, Deque
from api.serializers import CardSerializer, DequeSerializer, UserSerializer
from api.permissions import IsOwner


class CardsView(ListAPIView):
    serializer_class = CardSerializer

    def get_queryset(self):
        deque_id = self.kwargs["did"]
        return Card.objects.filter(deque=deque_id)


class DequeViewSet(viewsets.ModelViewSet):
    queryset = Deque.objects.all()
    serializer_class = DequeSerializer
    permission_classes = [IsAuthenticated, IsOwner]

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class UserViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class LoginView(KnoxLoginView):
    authentication_classes = [BasicAuthentication]
