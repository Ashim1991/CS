from djoser.serializers import UserCreateSerializer
from rest_framework import serializers
from .models import  Post, Schedule, Service,Question
from django.contrib.auth import get_user_model
User = get_user_model()

class UserCreateSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = User
        fields = ('id', 'email', 'first_name', 'last_name', 'is_staff','password')

class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = '__all__'
    
class PostSerializer(serializers.ModelSerializer):
      class Meta:
        model = Post
        fields = '__all__'

class QuestionSerializer(serializers.ModelSerializer):
      class Meta:
        model = Question
        fields = ['title','description']        

class ScheduleSerializer(serializers.ModelSerializer):
      class Meta:
        model = Schedule
        fields = ['title','description','month','day']          