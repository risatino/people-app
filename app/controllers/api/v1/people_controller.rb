class Api::V1::PeopleController < ApplicationController
  def index
    @contacts = Contact.all
  end

  def create 
    @contacts = Contact.new(name: params["name"], bio: params["bio"])

    if @contact.save
      redirect_to "/api/v1/people/#{@contact.id}.json"
    else
      render json: { errors: @contact.errors.full_messages }, status: 422
    end
  end

  def show
    @contact = Contact.find(params[:id])
  end
end