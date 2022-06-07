from django.contrib import admin
from django.urls import clear_script_prefix
from .models import PlanModel

@admin.register(PlanModel)
class PlanAdmin(admin.ModelAdmin):
    list_display=['id','item']
