from ninja import Schema
from datetime import datetime,date
from pydantic import EmailStr

class UserCreateSchema(Schema):
    # Create -> Data
    # UserIn
    email: EmailStr

class UserDetailSchema(Schema):
    # Get -> Data
    # UserOut
    email: EmailStr
    dateOfBirth: date
    totalPosts: int
