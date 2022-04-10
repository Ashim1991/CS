from rest_framework.response import Response
from rest_framework import permissions,viewsets
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView,ListCreateAPIView
from .models import Schedule, Service, UserAccount
from .serializers import ServiceSerializer,PostSerializer,QuestionSerializer,ScheduleSerializer,UserCreateSerializer


from django.shortcuts import render
from .models import Post,Question



class ServiceListView(ListAPIView):
    queryset = Service.objects.order_by('-date_created')
    serializer_class = ServiceSerializer
    lookup_field = 'slug'
    permission_classes = (permissions.AllowAny, )


class ServiceCategoryView(APIView):
    serializer_class = ServiceSerializer
    permission_classes = (permissions.AllowAny, )

    def post(self, request, format=None):
        data = self.request.data
        category = data['category']
        queryset = Service.objects.order_by('-date_created').filter(category__iexact=category)

        serializer = ServiceSerializer(queryset, many=True)

        return Response(serializer.data)

class PostListView(ListAPIView):
    queryset = Post.objects.all()
    serializer_class=PostSerializer
    permission_classes = (permissions.AllowAny,)

class PostListView(ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class=PostSerializer
    permission_classes = (permissions.AllowAny,) 

class QuestionListView(ListCreateAPIView):
    queryset = Question.objects.all()
    serializer_class=QuestionSerializer
    permission_classes = (permissions.AllowAny,)     
    
class ScheduleListView(ListCreateAPIView):
    queryset = Schedule.objects.all()
    serializer_class=ScheduleSerializer
    permission_classes = (permissions.AllowAny,)     

class UserListView(ListCreateAPIView):
    queryset = UserAccount.objects.all()
    serializer_class=UserCreateSerializer
    permission_classes = (permissions.AllowAny,)    