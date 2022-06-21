from django.contrib import admin
from api.models import (Deque, Card, Profile, User_Deque, User_Achievement)


admin.site.register(Profile)
admin.site.register(User_Deque)
admin.site.register(User_Achievement)


class CardStackedInlineAdmin(admin.StackedInline):
    model = Card


class DequeAdmin(admin.ModelAdmin):
    class Meta:
        model = Deque
    inlines = [
        CardStackedInlineAdmin,
    ]


admin.site.register(Deque, DequeAdmin)
admin.site.register(Card)
