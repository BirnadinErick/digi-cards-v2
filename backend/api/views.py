from rest_framework import generics
from django.contrib.auth.models import User
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from api.models import Deque
from api.serializers import DequeSerializer, UserSerializer
from api.permissions import IsOwnerOrReadOnly


class DequeList(generics.ListCreateAPIView):
    queryset = Deque.objects.all()
    serializer_class = DequeSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class DequeDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Deque.objects.all()
    serializer_class = DequeSerializer
    permission_classes = [IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly]


class UserList(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class UserDetail(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
