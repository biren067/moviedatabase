# Generated by Django 4.1.2 on 2023-10-23 17:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='movieindutry',
            name='language',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
    ]