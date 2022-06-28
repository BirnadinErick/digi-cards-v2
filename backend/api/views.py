from django.contrib.auth.models import User
from rest_framework import viewsets
from rest_framework.generics import ListAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import BasicAuthentication
from rest_framework.response import Response
from rest_framework.views import APIView
from knox.views import LoginView as KnoxLoginView
from api.models import Card, Deque
from api.serializers import CardSerializer, DequeSerializer, UserSerializer
from api.permissions import IsOwner


class DequeValidation(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, format=None):
        answers = request.data['answers']
        score = 0
        for cid, answer in answers.items():
            card: Card = Card.objects.get(id=cid)
            if card.correct_answer == answer:
                score += card.score
            else:
                pass

        return Response({'score': score})


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
