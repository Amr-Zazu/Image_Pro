from rest_framework import serializers

from images_api.models import Image

class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = 'id', 'image'