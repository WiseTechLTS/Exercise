# Generated by Django 4.0.4 on 2022-06-03 15:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('workouts', '0004_remove_workout_name'),
    ]

    operations = [
        migrations.AddField(
            model_name='workout',
            name='weight',
            field=models.IntegerField(null=True),
        ),
    ]