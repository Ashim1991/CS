from unicodedata import name
from django.urls import path
from .views import ProfileListView, ProfileCategoryView, ProfileCourseView,ProfileSectionView

from .views import MessageAPIView

urlpatterns = [
   path('profile/', ProfileListView.as_view()),
   path('message/', MessageAPIView.as_view()),
   path('category/', ProfileCategoryView.as_view()),
   path('section/', ProfileSectionView.as_view()),
   path('course/', ProfileCourseView.as_view())
]
