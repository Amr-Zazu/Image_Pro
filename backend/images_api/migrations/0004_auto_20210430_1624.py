# Generated by Django 3.1.7 on 2021-04-30 14:24

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('images_api', '0003_auto_20210427_0855'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='item',
            name='description',
        ),
        migrations.RemoveField(
            model_name='item',
            name='title',
        ),
    ]
