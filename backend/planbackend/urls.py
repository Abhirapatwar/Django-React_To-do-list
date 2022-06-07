from django.urls import path
from . import views

urlpatterns = [
    path('lists/', views.Planget.as_view()),
    path('create/', views.PlanPost.as_view()),
    path('delete/<int:id>', views.PlanDelete.as_view()),
]
