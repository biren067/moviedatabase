# Generated by Django 4.1.2 on 2023-10-23 17:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_movieindutry_language'),
    ]

    operations = [
        migrations.AddField(
            model_name='productionhouse',
            name='youtube_name',
            field=models.CharField(max_length=200, null=True),
        ),
    ]
