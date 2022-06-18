from django.db import models


class Deque(models.Model):
    title = models.CharField(
        name="title",  verbose_name="Title of the card",
        blank=False, max_length=200
    )
    created_on = models.DateField(auto_created=True)
    owner = models.ForeignKey(
        'auth.User', on_delete=models.CASCADE, related_name='deques'
    )

    class Meta:
        ordering = ['created_on']
