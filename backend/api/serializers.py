from django.contrib.auth.models import User
from rest_framework import serializers
from api.models import Deque


class DequeSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')

    class Meta:
        model = Deque
        fields = ['id', 'title', 'created_on', 'owner']


class UserSerializer(serializers.ModelSerializer):
    deques = serializers.PrimaryKeyRelatedField(many=True, queryset=Deque.objects.all())

    class Meta:
        model = User
        fields = ['id', 'username', 'deques']