from django.db import models
from django.contrib.auth.models import User


class Deque(models.Model):
    owner = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="deques"
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

    def __str__(self) -> str:
        return str(self.title).title()

    class Meta:
        ordering = ["-difficulty", "-created_on"]


class Card(models.Model):
    question = models.CharField(
        verbose_name="Question", max_length=255, blank=False, null=False
    )
    score = models.IntegerField(
        verbose_name="Score for this cards", default=10, blank=False, null=False
    )
    correct_answer = models.PositiveIntegerField(
        verbose_name="ID of correct Answer", blank=False, null=False
    )
    deque = models.ForeignKey(
        Deque, on_delete=models.CASCADE, related_name="cards", blank=False, null=False
    )
    answers = models.TextField(
        verbose_name="Answers of this card", blank=False, null=False
    )

    def __str__(self) -> str:
        return (str(self.question).title()[:22] + "...")

    class Meta:
        ordering = ["-deque", "score"]


class Profile(models.Model):
    user = models.OneToOneField(
        User, on_delete=models.CASCADE, related_name="profile", blank=False, null=False, primary_key=True
    )
    username = models.CharField(
        verbose_name="Unique username", unique=True, blank=False, null=False, max_length=100
    )
    note = models.TextField(
        verbose_name="Note by the user", blank=False, null=False
    )
    avatar = models.URLField(
        verbose_name="Avatar cdn url", blank=False, null=False, default="https://api.lorem.space/image/game",
        unique=True
    )
    respect = models.PositiveIntegerField(
        verbose_name="Respect gained from fellows", blank=False, null=False, default=0
    )
    rank = models.PositiveSmallIntegerField(
        verbose_name="Rank of the user", default=1, null=False, blank=False
    )
    meta = models.TextField(
        verbose_name="Meta-data about the user", blank=True, null=True
    )
    settings = models.TextField(
        verbose_name="User preferences", blank=True, null=True
    )

    def __str__(self) -> str:
        return self.username

    class Meta:
        ordering = ["-rank", "-respect", "username"]


class User_Deque(models.Model):
    """
    Table to connect User and his/her visited deque(s)
    """
    user = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="visited_deques", blank=False, null=False
    )
    deque = models.ForeignKey(
        Deque, on_delete=models.CASCADE, related_name="visited_user", blank=False, null=False
    )
    is_finished = models.BooleanField(
        verbose_name="User finished the Deque", default=False, blank=False, null=False
    )

    def __str__(self) -> str:
        return f"{self.user.profile.username} :: {self.deque.title[:5]}..."


class User_Achievement(models.Model):
    user = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="achievements", blank=False, null=False
    )
    achievements = models.TextField(
        verbose_name="Achievemnets by the user in csv-form", blank=False, null=False, default=""
    )

    def __str__(self) -> str:
        return self.user.profile.username[:5]
