from rest_framework import serializers
from .models import LeaDetails, Comment


class CommentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Comment
        fields = '__all__'


class LeadsSerializer(serializers.ModelSerializer):
    comment = CommentSerializer()

    class Meta:
        model = LeaDetails
        fields = '__all__'

    def create(self, validated_data):

        comment_data = validated_data.pop('comment')
        comment_obj = Comment.objects.create(**comment_data)
        lead_obj = LeaDetails.objects.create(
            comment=comment_obj, **validated_data)
        lead_obj.save()
        return lead_obj


class DashLeadSerializer(serializers.ModelSerializer):

    class Meta:
        model = LeaDetails
        fields = ['id', 'title', 'status']
