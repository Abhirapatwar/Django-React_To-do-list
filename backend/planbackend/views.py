from cgitb import lookup
from django.shortcuts import render
from .serializer import PlanSerializer
from .models import PlanModel
from rest_framework.generics import ListAPIView,CreateAPIView,DestroyAPIView

class Planget(ListAPIView):
    queryset=PlanModel.objects.all()
    serializer_class=PlanSerializer

class PlanPost(CreateAPIView):
    queryset=PlanModel.objects.all()
    serializer_class=PlanSerializer

class PlanDelete(DestroyAPIView):
    queryset=PlanModel.objects.all()
    serializer_class=PlanSerializer
    lookup_field = 'id'
