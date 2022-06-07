from unittest.util import _MAX_LENGTH
from django.db import models

class PlanModel(models.Model):
    item = models.CharField(max_length=255)
