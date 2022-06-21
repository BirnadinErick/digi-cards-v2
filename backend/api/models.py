from django.db import models
from django.contrib.auth.models import User


class Deque(models.Model):
    owner = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='deques'
    )
    created_on = models.DateField(auto_created=True)
    title = models.CharField(
        verbose_name="Title of the card",
        blank=False, max_length=200
    )
    category = models.CharField(
        verbose_name="Category of the deque", max_length=200, blank=False, null=False,
        default="N/A"
    )
    difficulty = models.IntegerField(
        verbose_name="Difficulty score", blank=False, null=False, default=0
    )
    deque_master = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="mastered_deques", blank=True, null=True
    )
    time = models.PositiveBigIntegerField(
        verbose_name="Allocated Time(seconds)", default=120, blank=False, null=False
    )
    sidenote = models.TextField(
        verbose_name="Sidenote for the player"
    )

    class Meta:
        ordering = ['created_on']
