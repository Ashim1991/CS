from urllib import response
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import permission_classes
from .Pusher import pusher_client
from rest_framework import permissions
from Chat.serializers import ProfileSerializer
from Chat.models import Profile
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView, RetrieveAPIView


@permission_classes((permissions.AllowAny,))
class MessageAPIView(APIView):

   def post(self,request):
       pusher_client.trigger('chat', 'message',{
           'username': request.data['username'],
           'message': request.data['message'],
       })

       return Response([])

class ProfileListView(ListAPIView):
    queryset = Profile.objects.order_by('-date_created')
    serializer_class = ProfileSerializer

    permission_classes = (permissions.AllowAny, )  

class ProfileCategoryView(APIView):
    serializer_class = ProfileSerializer
    permission_classes = (permissions.AllowAny, )

    def post(self, request, format=None):
        data = self.request.data
        category = data['category']
        
        queryset = Profile.objects.order_by('-date_created').filter(category__iexact=category)
        
        serializer = ProfileSerializer(queryset, many=True)

        return Response(serializer.data)

class ProfileSectionView(APIView):
    serializer_class = ProfileSerializer
    permission_classes = (permissions.AllowAny, )

    def post(self, request, format=None):
        data = self.request.data
        section = data['section']
        
        queryset = Profile.objects.order_by('-date_created').filter(category__iexact=section)
        
        serializer = ProfileSerializer(queryset, many=True)

        return Response(serializer.data)

class ProfileCourseView(APIView):
    serializer_class = ProfileSerializer
    permission_classes = (permissions.AllowAny, )

    def post(self, request, format=None):
        data = self.request.data
        course = data['course']
        
        queryset = Profile.objects.order_by('-date_created').filter(category__iexact=course)
        
        serializer = ProfileSerializer(queryset, many=True)

        return Response(serializer.data)

