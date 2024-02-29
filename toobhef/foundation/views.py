from django.shortcuts import render, HttpResponse, redirect
from django.contrib import messages
from .models import Event, Testimonial, FAQ, ContactUs, NewsletterSignup, VolunteerSignup  

def home(request):
    if request.method == "POST" and 'contact_submit' in request.POST:
        contactus = ContactUs()
        name = request.POST.get('name')
        email = request.POST.get('email') 
        message = request.POST.get('message')
        contactus.name = name
        contactus.email = email
        contactus.message = message
        contactus.save()
        messages.success(request, "Submitted Successfully")
        return redirect('home')

    if request.method == "POST" and 'newsletter_submit' in request.POST:
        newsletter_signup = NewsletterSignup()
        email = request.POST.get('email')
        newsletter_signup.email = email
        messages.success(request, "Sign Up Successful")
        return redirect('home')

    events = Event.objects.all()
    testimonials = Testimonial.objects.all()
    faqs = FAQ.objects.all()

    context = {
        'events': events,
        'testimonials': testimonials,
        'faqs': faqs,
    }

    return render(request, 'index.html', context)


def donate(request):
    if request.method == "POST" and 'volunteer_submit' in request.POST:
        volunteer = VolunteerSignup()
        name = request.POST.get('name')
        email = request.POST.get('email')
        phone = request.POST.get('phone')
        interest = request.POST.get('interest')
        experience = request.POST.get('experience and reference')
        volunteer.full_name = name
        volunteer.email = email
        volunteer.phone = phone
        volunteer.interests = interest
        volunteer.experience = experience
        volunteer.save()
        messages.success(request, "Volunteered Successfully")
        return redirect('donate')
    return render(request, 'donate.html')

def about_founder(request):
    return render(request, 'about founder.html',{})


