# Generated by Django 2.2.3 on 2019-07-07 19:32

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0002_auto_20190706_1816'),
    ]

    operations = [
        migrations.RenameField(
            model_name='cadastrodeusuario',
            old_name='data_nacimento',
            new_name='data_nascimento',
        ),
    ]
