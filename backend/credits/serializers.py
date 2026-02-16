from rest_framework import serializers
from .models import Credit
from accounts.models import User


class CreditSerializer(serializers.ModelSerializer):

    customer_email = serializers.EmailField(write_only=True)

    class Meta:
        model = Credit
        fields = ["id", "customer_email", "amount", "term_months", "status", "created_at"]
        read_only_fields = ["status", "created_at"]

    def create(self, validated_data):
        email = validated_data.pop("customer_email")
        customer = User.objects.get(email=email)

        return Credit.objects.create(
            customer=customer,
            created_by=self.context["request"].user,
            **validated_data
        )
