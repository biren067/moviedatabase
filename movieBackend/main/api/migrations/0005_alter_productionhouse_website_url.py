# Generated by Django 4.1.2 on 2023-10-23 17:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_alter_productionhouse_website_url'),
    ]

    operations = [
        migrations.AlterField(
            model_name='productionhouse',
            name='website_url',
            field=models.URLField(blank=True, max_length=400, null=True),
        ),
    ]
