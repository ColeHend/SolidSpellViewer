using SolidSpellViewer.repositories;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();

builder.Services.AddTransient<ISpellRepository, SpellRepository>();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// app.UseHttpsRedirection();

app.UseStaticFiles();
app.UseRouting();

app.UseAuthentication();
app.UseAuthorization();


app.UseEndpoints(endpoints =>
{
    endpoints.MapDefaultControllerRoute();
});


app.UseSpa(spa =>
{
    spa.Options.SourcePath = "client";

    if (app.Environment.IsDevelopment())
    {
        // spa.UseReactDevelopmentServer(npmScript: "build");
        spa.UseProxyToSpaDevelopmentServer("http://localhost:3000");
    }
});
app.Run();
