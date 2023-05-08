from django.shortcuts import render
from .models import Post, Author

from rest_framework.generics import (
    ListAPIView,
    RetrieveAPIView,
    CreateAPIView,
    UpdateAPIView,
    DestroyAPIView
)

from rest_framework.permissions import IsAuthenticated, AllowAny

from .serializers import PostSerializer, PostCreateSerializer

def home(request):
    return render(request, "index.html")


class PostListView(ListAPIView):
    permission_classes = (AllowAny, )
    serializer_class = PostSerializer
    queryset = Post.objects.all()


class PostCreateView(CreateAPIView):
    permission_classes = (AllowAny, )
    serializer_class = PostCreateSerializer
    queryset = Post.objects.all()