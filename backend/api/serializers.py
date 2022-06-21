from django.contrib.auth.models import User
from rest_framework import serializers
from api.models import Card, Deque


class DequeSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')
    deque_master = serializers.ReadOnlyField(source='deque_master.username')

    class Meta:
        model = Deque
        fields = [
            'id',
            'owner',
            'created_on',
            'title',
            'category',
            'difficulty',
            'deque_master',
            'time',
            'sidenote',
        ]


class CardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Card
        fields = [
            'question',
            'score',
            'deque',
            'answers',
            'correct_answer',
        ]


class UserSerializer(serializers.ModelSerializer):
    deques = serializers.PrimaryKeyRelatedField(many=True, queryset=Deque.objects.all())

    class Meta:
        model = User
        fields = ['id', 'username', 'deques']
