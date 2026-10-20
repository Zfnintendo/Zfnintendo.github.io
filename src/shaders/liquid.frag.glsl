uniform float uTime;
uniform vec2 uResolution;

float hash(vec2 p) {
    return fract(
        sin(dot(p, vec2(127.1, 311.7))) * 43758.5453
    );
}

float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);

    vec2 u = f * f * (3.0 - 2.0 * f);

    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));

    return mix(
        mix(a, b, u.x),
        mix(c, d, u.x),
        u.y
    );
}

float fbm (vec2 p) {
    float value = 0.0;
    float amplitude = 0.5;

    for (int i = 0; i < 5; i++) {
        value += amplitude * noise(p);

        p *= 2.0;
        amplitude *= 0.5;
    }

    return value;
}

void main() {

    vec2 uv = gl_FragCoord.xy / uResolution.xy;

    uv.x *= uResolution.x / uResolution.y;

    float t = uTime * 0.08;

    vec2 p = uv * 2.4;

    vec2 distortion = vec2(
        fbm(p + vec2(t, 0.0)),
        fbm(p + vec2(5.2, 1.3) - vec2(t, 0.0))
    );

    vec2 warpedUV = p + 4.0 * (distortion - 0.5);

    float n = fbm(warpedUV);

    vec3 cream = vec3(1.0, 0.96, 0.65);
    vec3 yellow = vec3(1.0, 0.82, 0.18);
    vec3 orange = vec3(1.0, 0.65, 0.03);

    vec3 color = mix(cream, yellow, smoothstep(0.25, 0.7, n));

    color = mix(color, orange, smoothstep(0.45, 0.95, n));

    gl_FragColor = vec4(color, 1.0);
}