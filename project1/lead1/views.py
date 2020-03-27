from django.shortcuts import render
from rest_framework import viewsets
from .models import LeaDetails, Comment
from .serializers import LeadsSerializer, CommentSerializer, DashLeadSerializer
# Create your views here.


class LeadsViewSet(viewsets.ModelViewSet):
    queryset = LeaDetails.objects.all()
    serializer_class = LeadsSerializer


class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer


class DashViewSet(viewsets.ModelViewSet):
    queryset = LeaDetails.objects.all()
    serializer_class = DashLeadSerializer
