from django.urls import path
from .views import PostListView, PostCreateView, PostDetailView, PostUpdateView, AuthorDetailView, PostDeleteView

urlpatterns = [
    path('author/<pk>/', AuthorDetailView.as_view(), name='author-detail'),
    path('', PostListView.as_view(), name="post-list"),
    path('create/', PostCreateView.as_view(), name="post-create"),

    path('<pk>/', PostDetailView.as_view(), name="post-detail"),
    path('<pk>/update/', PostUpdateView.as_view(), name="post-update"),
    path('<pk>/delete/', PostDeleteView.as_view(), name="post-delete")

] 
 