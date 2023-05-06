from rest_framework import serializers
from .models import Post, Comment
from django.contrib.auth import get_user_model

User = get_user_model()

class OwnerSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('__all__')


class PostSerializer(serializers.ModelSerializer):

    owner = serializers.HyperlinkedIdentityField(many=False, view_name='owner-detail')
    comment = serializers.HyperlinkedRelatedField(queryset = Comment.objects.all(), many=True, view_name='comment-detail')

    class Meta:
        model = Post
        fields = ('__all__')
        
class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ('__all__')