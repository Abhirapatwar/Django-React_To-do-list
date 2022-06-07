from rest_framework import serializers
from .models import PlanModel

class PlanSerializer(serializers.ModelSerializer):
    class Meta:
        model = PlanModel
        fields = ['id','item']
