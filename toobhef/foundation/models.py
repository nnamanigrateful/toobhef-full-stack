from django.db import models
import datetime
# Create your models here.


class ContactUs(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()
    message = models.TextField()

    def __str__(self):
        return f"Message from {self.name}"


class VolunteerSignup(models.Model):
    full_name = models.CharField(max_length=255)
    phone = models.CharField(max_length=15)
    email = models.EmailField()
    interests = models.TextField("Volunteer Interests")
    experience = models.TextField("Volunteer Experience and References", blank=True)

    def __str__(self):
        return f"Volunteer: {self.full_name}"


class NewsletterSignup(models.Model):
    email = models.EmailField()

    def __str__(self):
        return f"Newsletter signup: {self.email}"



class Event(models.Model):
    title = models.CharField(max_length=100)
    short_description = models.TextField()  # Brief info shown on the card
    detailed_description = models.TextField()  # Full details shown when expanded
    date = models.DateField()
    image = models.ImageField(upload_to='uploads/events/')  # Path where event images are stored

    def __str__(self):
        return f"{self.title} - {self.date}"
    


class Testimonial(models.Model):
    text = models.TextField()
    name = models.CharField(max_length=100)
    role = models.CharField(max_length=100, default='Volunteer OR Beneficiary')  # e.g., Volunteer, Beneficiary
    image = models.ImageField(upload_to='uploads/testimonials/')

    def __str__(self):
        return f"Testimonial by {self.name}"
    


class FAQ(models.Model):
    question = models.CharField(max_length=200)
    answer = models.TextField()

    def __str__(self):
        return self.question



