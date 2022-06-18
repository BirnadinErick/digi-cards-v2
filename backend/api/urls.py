from django.urls import path
from api.views import DequeList, DequeDetail, UserDetail, UserList

urlpatterns = [
    path('deques/', DequeList.as_view()),
    path('deques/<int:pk>/', DequeDetail.as_view()),
    path('users/', UserList.as_view()),
    path('users/<int:pk>/', UserDetail.as_view()),
]
