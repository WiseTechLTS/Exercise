# Generated by Django 4.1.7 on 2023-03-16 00:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('workouts', '0009_alter_movements_name_alter_muscle_groups_name_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='workout',
            name='reps',
            field=models.IntegerField(),
        ),
        migrations.AlterField(
            model_name='workout',
            name='sets',
            field=models.IntegerField(),
        ),
    ]
