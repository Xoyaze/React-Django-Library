from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Library
from .serializers import LibrarySerializer
from rest_framework import status


# Create your views here.
class LibraryList(APIView):

    def get(self, request):
        queryset = Library.objects.all()
        serializer = LibrarySerializer(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):

        serializer = LibrarySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_406_NOT_ACCEPTABLE)
