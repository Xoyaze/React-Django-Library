from django.urls import path
from .views import LibraryList

urlpatterns = [
    path('', LibraryList.as_view()),
]
