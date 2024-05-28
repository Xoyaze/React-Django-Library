from rest_framework import serializers
from .models import Library

class LibrarySerializer(serializers.ModelSerializer):
    class Meta:
        model = Library
        fields = ['id','name','age_restricted','number_of_pages','author_name','created_at']