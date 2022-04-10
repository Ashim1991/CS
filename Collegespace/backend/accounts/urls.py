from django.urls import include, path
from .views import  PostListView, ServiceListView, ServiceCategoryView, QuestionListView,ScheduleListView,UserListView




urlpatterns = [
    path('service/', ServiceListView.as_view()),
    path('category/', ServiceCategoryView.as_view()),
    path('Post/', PostListView.as_view()),
    path('question/', QuestionListView.as_view()),
    path('schedule/', ScheduleListView.as_view()),
    path('user/', UserListView.as_view()),
    
]

