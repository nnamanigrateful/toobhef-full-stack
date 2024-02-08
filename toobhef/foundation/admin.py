from django.contrib import admin
from .models import Event, FAQ, Testimonial, ContactUs, VolunteerSignup,NewsletterSignup


admin.site.register(Testimonial)

admin.site.register(FAQ)

admin.site.register(Event)

admin.site.register(ContactUs)

admin.site.register(VolunteerSignup)

admin.site.register(NewsletterSignup)