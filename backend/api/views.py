from rest_framework import viewsets
from django.contrib.auth.models import User
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from api.models import Deque
from api.serializers import DequeSerializer, UserSerializer
from api.permissions import IsOwnerOrReadOnly


class DequeViewSet(viewsets.ModelViewSet):
    queryset = Deque.objects.all()
    serializer_class = DequeSerializer
    permission_classes = [IsAuthenticatedOrReadOnly,
                          IsOwnerOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class UserViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
